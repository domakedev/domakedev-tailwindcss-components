import React from 'react'

import ButtonIcon from './ButtonIcon'

export default {
    title: 'Domakedev/Atomos/ButtonIcon',
    component: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const Small = Template.bind({})
Small.args = {
    children: "Botoncito",
    size: "small"
}

export const Big = Template.bind({})
Big.args = {
    children: "Botonzote",
    size: "big"
}
