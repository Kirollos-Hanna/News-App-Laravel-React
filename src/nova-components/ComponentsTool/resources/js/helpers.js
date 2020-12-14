export function parseResponse(response) {
  if(!(response || response.data || response.data.resources)){
    return ;
  } 

  const resources = response.data.resources;

  let arrayOfFields=[];
  resources.forEach((resource) => {
    let fields = {};
    fields["softDeleted"] = resource.softDeleted;
    resource.fields.forEach((field) => {
      if (field.value) {
        fields[field.attribute] = field.value;
      }
    });
    arrayOfFields.push(fields);
  });
  
  return arrayOfFields;
}


export function validateUrl (urlString) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(urlString);
}

export function validateEmptyInput (input) {
    return input === "";
}