import React from 'react'

import Button from './Button'

export default {
    title: 'Domakedev/Atomos/Button',
    component: Button,
};


const Template = (args) => <Button {...args} />;


export const Primary = Template.bind({})
Primary.args = {
    type: "primary",
    text: "Boton primario",
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: "secondary",
    text: "Boton secundario",
}

export const Warning = Template.bind({})
Warning.args = {
    type: "warning",
    text: "Boton Warning",
}