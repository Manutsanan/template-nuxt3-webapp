export function changeStatus(
  text: any,
): any {

  let status = {
    text: "",
    class: ""
  }
  switch (text) {
    case "success":
      status.text = "success";
      status.class = "text-green-500";
      break;

    case "failed":
      status.text = "failed";
      status.class = "text-red-500";
      break;

    case "pedding":
      status.text = "pedding";
      status.class = "text-yellow-500";
      break;

    default:
      status.text = "unknow";
      status.class = "text-gray-500";
      break;
  }

  return status;
}
