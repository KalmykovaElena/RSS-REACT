export const createFormData = (
  obj: { [key: string]: number | string },
  refs: {
    [key: string]:
      | React.RefObject<HTMLInputElement>
      | React.RefObject<HTMLSelectElement>;
  }
) => {
  for (const key in refs) {
    const objKey = key.replace('Ref', '').replace(/([0-9])/, '');
    console.log(objKey);
    const form = refs[key as keyof typeof refs].current;
    if (objKey === 'gender' && form instanceof HTMLInputElement) {
      if (form?.checked) obj[objKey] = form.value;
    } else if (
      objKey.includes('aducation') &&
      form instanceof HTMLInputElement
    ) {
      if (form?.checked)
        obj[objKey] = obj[objKey]
          ? obj[objKey] + ', ' + form.value
          : form.value;
    } else if (objKey === 'file' && form instanceof HTMLInputElement) {
      obj[objKey] = form.files![0] ? URL.createObjectURL(form.files![0]) : '';
    } else {
      obj[objKey] = form ? form.value : '';
    }
  }
};
