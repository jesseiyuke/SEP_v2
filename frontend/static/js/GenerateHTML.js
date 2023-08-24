export function generateLinksList() {
  let links = [];

  const personalDetailsLink = generateLink(
    "Personal Details",
    "/PersonalDetails",
    true
  );

  const educationLink = generateLink("Education", "/PersonalDetails", false);

  const workExperienceLink = generateLink(
    "Work Experience",
    "/PersonalDetails",
    false
  );

  const refereesLink = generateLink("Referees", "/PersonalDetails", false);

  links.push(personalDetailsLink);
  links.push(educationLink);
  links.push(workExperienceLink);
  links.push(refereesLink);

  return links;
}

export function generateLink(name, ref, active) {
  const link = document.createElement("a");
  link.textContent = name;
  link.href = ref;
  link.classList.add("nav_link");

  if (active) {
    link.classList.add("active");
  }

  return link;
}

export function generateNavigationBar(links) {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  links.forEach((link) => {
    navbar.appendChild(link);
  });

  return navbar;
}

export function generateInputs(label, id, type) {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("floating-label-content");

  const inputLabel = document.createElement("label");
  inputLabel.textContent = label;

  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = id;
  input.classList.add("floating-input");

  const inputSpan = document.createElement("span");
  inputSpan.id = id + "Validation";
  inputSpan.classList.add("validation-error");

  inputDiv.appendChild(inputLabel);
  inputDiv.appendChild(input);
  inputDiv.appendChild(inputSpan);

  return inputDiv;
}

export function generateRadioGroup(label, title1, title2, id) {
  const radioDiv = document.createElement("div");
  radioDiv.classList.add("floating-label-content");

  const radioLabel = document.createElement("label");
  radioLabel.textContent = label;

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.id = id + "Yes";
  radio1.value = true;
  radio1.textContent = title1;

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.id = id + "No";
  radio2.value = false;
  radio2.textContent = title2;

  const radioSpan = document.createElement("span");
  radioSpan.id = id + "Validation";
  radioSpan.classList.add("validation-error");

  radioDiv.appendChild(radioLabel);
  radioDiv.appendChild(radio1);
  radioDiv.appendChild(radio2);
  radioDiv.appendChild(radioSpan);

  return radioDiv;
}
