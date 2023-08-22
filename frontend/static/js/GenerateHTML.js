export function generateInputs(label, id, type)
{

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('floating-label-content');

    const inputLabel = document.createElement('label');
    inputLabel.textContent = label;

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    input.classList.add("floating-input");

    const inputSpan = document.createElement('span');
    inputSpan.id = id + "Validation";
    inputSpan.classList.add('validation-error');

    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(input);
    inputDiv.appendChild(inputSpan);

    return inputDiv;

}

export function generateLinks(name, ref, active)
{
    const link = document.createElement('a');
    link.textContent = name;
    link.href = ref;
    link.classList.add('nav_link');

    if (active)
    {
        link.classList.add('active');
    }

    return link;
}

export function generateRadioGroup()
{

}

export function generateRadioButton()
{
    
}