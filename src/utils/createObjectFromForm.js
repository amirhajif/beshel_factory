const createObjectFromForm = (formHtmlCollection, formSchema) => {
  let keys = formSchema?.keyof()?._def?.values;
  let object = {};
  if (keys) {
    keys.map((key) => {
      object = { ...object, [key]: formHtmlCollection?.namedItem(key)?.value };
    });
  }

  return formSchema.safeParse(object);
};

export default createObjectFromForm;
