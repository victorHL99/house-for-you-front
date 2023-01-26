import Swal from 'sweetalert2';

export default function errorHandler(error) {
  const { data } = error.response;

  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${data}`,
    showConfirmButton: false,
    timer: 1500,
    width: 300,
  });
}
