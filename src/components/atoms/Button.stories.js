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
    children: "Boton primario",
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: "secondary",
    children: "Boton secundario",
}

export const Warning = Template.bind({})
Warning.args = {
    type: "warning",
    children: "Boton Warning",
}
export const Alert = Template.bind({})
Alert.args = {
    type: "alert",
    children: "Boton Alert",
}
export const Success = Template.bind({})
Success.args = {
    type: "success",
    children: "Boton Success",
}