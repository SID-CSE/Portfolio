import crypto from "node:crypto";

type CloudinaryUploadResult = {
  asset_id: string;
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
};

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return null;
  }

  return { cloudName, apiKey, apiSecret };
}

function buildSignature(params: Record<string, string>, apiSecret: string) {
  const signatureBase = Object.entries(params)
    .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return crypto.createHash("sha1").update(`${signatureBase}${apiSecret}`).digest("hex");
}

export async function uploadToCloudinary(file: File, folder = "portfolio") {
  const config = getCloudinaryConfig();

  if (!config) {
    throw new Error("Missing Cloudinary credentials.");
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const publicId = file.name.replace(/\.[^.]+$/, "");
  const signature = buildSignature({ folder, public_id: publicId, timestamp }, config.apiSecret);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", config.apiKey);
  formData.append("timestamp", timestamp);
  formData.append("folder", folder);
  formData.append("public_id", publicId);
  formData.append("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return (await response.json()) as CloudinaryUploadResult;
}

export async function deleteFromCloudinary(publicId: string) {
  const config = getCloudinaryConfig();

  if (!config) {
    throw new Error("Missing Cloudinary credentials.");
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = buildSignature({ public_id: publicId, timestamp }, config.apiSecret);

  const formData = new FormData();
  formData.append("public_id", publicId);
  formData.append("api_key", config.apiKey);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/destroy`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json() as Promise<{ result: string }>;
}
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const cdn = (path: string) => {
  if (!cloudName) {
    return "data:image/svg+xml;charset=UTF-8,";
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${path}`;
};

export const cloudinaryAssets = {
  architectures: {
    cms:
      cdn("cms_niblgs.png"),
    taskera:
      cdn("taskera_wnaqi6.png"),
    smartpay4:
      cdn("v1781515260/smartpay4_rk4aod.png"),
    gamearcade:
      cdn("gamearcade_tt9gzw.png"),
    recon:
      cdn("v1781515214/recon_cz1iha.png"),
    raspberryPi:
      cdn("IOTrasberrypi_d1rlri.png"),
    arduino:
      cdn("IOTarduino_bhainm.png"),
  },
  certificates: {
    PythonFoundation:
      cdn("Python_Foundation_Certification_page-0001_lr3sid.jpg"),

    SoftwareEngineeringAgile:
      cdn("Software_Engineering_and_Agile_software_development_page-0001_eoshdl.jpg"),

    IBMAIFundamentals:
      cdn("artificial-intelligence-fundamentals_ovheyk.png"),

    oracleGenerativeAI:
      cdn("AI-Genarative_AI_Professional_page-0001_z1unjy.jpg"),

    oracleVectorSearch:
      cdn("AI-Vector-Professional-eCertificate_page-0001_1_bh5tce.jpg"),

    oracleDataScience:
      cdn("AI-Data-Science-Professional-eCertificate_page-0001_1_m3vrkw.jpg"),

    oracleAIFoundation:
      cdn("AI-Foundation-Associate-eCertificate_page-0001_1_l9wdc2.jpg"),

    NPTELFoundationML:
      cdn("e-Certificate_Mathematical_Foundation_for_Machine_Learning_page-0001_hjiq55.jpg"),

    NPTELNeuralNetworks:
      cdn("e-Certificate_Neural_Networks_for_Computer_Vision_and_Natural_Language_Processing_page-0001_az3d4m.jpg"),

    NPTELML:
      cdn("e-Certificate_Machine_Learning_for_Enginering_and_Science_Applications_page-0001_okj8zv.jpg"),
  },
  experience: {
    infosysSpringboard: {
      image: cdn("talentlink_llkumv.jpg"),
      title: "Infosys Springboard Python Stack Internship Certificate",
    },
    ibmSkillsBuild: {
      image: cdn("aicte_mw4eji.jpg"),
      title: "AICTE IBM SkillsBuild AI/ML Internship Certificate",
    },
    cybersecurityMentorship: {
      image: cdn("702eb10d-82e7-4b70-a787-c7c31f710a2e.png"),
      title: "Cybersecurity Internship Certificate",
    },
  },

}
