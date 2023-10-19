import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";





const meta = {
    title: "UI/labels/MyLabel",
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' }

    }
} satisfies Meta<typeof MyLabel>;



export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {

    args: {
        label: " BAsic Label"
    }

};


export const AllCaps: Story = {

    args: {
        label: "AllCaps",
        allCaps: true
    }

};



export const Secondary: Story = {

    args: {
        label: "Secondary",
        color: "text-secondary"
    }

};


export const CustomColor: Story = {

    args: {
        label: "CustomColor",
        fontColor: "red"
    }
    

};


