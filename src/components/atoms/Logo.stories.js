import React from 'react'

import Logo from './Logo'

export default {
    title: 'Domakedev/Atomos/Logo',
    component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const LogoSmall = Template.bind({})
LogoSmall.args = {
    size: "small",
}
export const LogoMedium = Template.bind({})
LogoMedium.args = {
    size: "medium",
}
export const LogoLarge = Template.bind({})
LogoLarge.args = {
    size: "large",
}