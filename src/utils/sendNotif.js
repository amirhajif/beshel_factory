import Swal from "sweetalert2";
export const sendNotif = (text, type, acceptable = false, position = "top-end", timer = 1500) => {
  Swal.fire({
    title: text,
    icon: type,
    toast: acceptable ? false : true,
    position: position,
    showConfirmButton: false,
    timer: timer,
  });
};

export default sendNotif;
