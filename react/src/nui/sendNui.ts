
import axios from "axios"

export async function fetchNui(eventName: string, data?: any) {

  const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : 'nui-frame-app';

  const resp = await axios(`https://${resourceName}/${eventName}`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data: JSON.stringify(data)
  });
  

  let respFormatted = await resp

  return respFormatted
}
