export const sebuahProgram = (kondisi) => {
  if (typeof kondisi !== "boolean") {
    throw new Error("validasi gagal");
  }
  return "Berhasil";
};
