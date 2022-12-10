import { v4 as uuidv4 } from 'uuid';
export const splitLine = (sentence) => {
    sentence = sentence.split("<br/>");
    let result = [sentence[0]];
    for (let i = 1; i < sentence.length; i++) {
      result = result.concat(<br key={uuidv4()}/>, sentence[i]);
    }
    console.log(result);
    return result;
}

export const getInfo=()=>{
  return [{"title":"TVL","data":"$167M", "link":"#"},{"title":"24 HR TRADING<br/>VOLUME","data":"$13.4M", "link":"#"},{"title":"INTERCHAIN<br/>TRANSFERS","data":"1000+", "link":"#"}]
}
