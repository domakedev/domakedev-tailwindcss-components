import React from 'react'

import Input from './Input'

export default {
    title: 'Domakedev/Atomos/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Principal = Template.bind({})
Principal.args = {
    placeholder: "Principal",
}
