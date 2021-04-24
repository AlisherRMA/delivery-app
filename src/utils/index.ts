/* eslint-disable */
import i18n from "@/plugins/i18n";
import { AxiosResponse } from "axios";

export function translate<T>(data: T): T {
  try {
    let str = JSON.stringify(data);

    const KzRu = i18n.locale === "ru" ? "Ru" : "Kz";
    const KazRus = i18n.locale === "ru" ? "Rus" : "Kaz";

    str = str.replace(new RegExp(`___${i18n.locale.replace(`kk`, "kz")}`, "gi"), "");
    str = str.replace(new RegExp(`_${i18n.locale}":`, "g"), `":`); // _kk/_ru
    str = str.replace(new RegExp(`${KazRus}":`, "g"), `":`); // Kaz/Rus
    str = str.replace(new RegExp(`${KzRu}":`, "g"), `":`); // Kz/Ru

    return JSON.parse(str);
  } catch (e) {
    console.error(e);
    return data;
  }
}
export function getImageFromAssets(name: string) {
  return require(`@/assets/${name}`);
}

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function isObjectEmpty(obj: object) {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export function getFileNameFromHeader(res: AxiosResponse) {
  let filename = "";
  const disposition = res.headers["content-disposition"];
  if (disposition && disposition.indexOf("attachment") !== -1) {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(disposition);
    if (matches != null && matches[1]) {
      filename = matches[1].replace(/['"]/g, "");
    }
  }
  return filename;
}

export function blobToJson<T>(blob: Blob): Promise<T | null> {
  return new Promise(resolve => {
    const f = new FileReader();
    f.onload = () => {
      resolve(JSON.parse(f.result as string));
    };
    f.onerror = () => resolve(null);
    f.onabort = () => resolve(null);

    f.readAsText(blob, "UTF-8");
  });
}

export function downloadFile(href: string) {
  const a = document.getElementById("app-download-link") as HTMLAnchorElement;
  a.href = href;
  a.click();
}

export const cloneObject = function(obj) {
  return obj ? JSON.parse(JSON.stringify(obj)) : {};
};

export const deepCopy = inObject => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopy(value);
  }

  return outObject;
};

export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
