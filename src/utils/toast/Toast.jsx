import toast from "react-hot-toast";

const toastSuccess = data => {
  return toast.success(data);
};

const toastError = data => {
  return toast.error(data);
};

export { toastSuccess, toastError };
