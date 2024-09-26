import Page from "../../app/dashboard/customers/page";

export default {
  title: "page",
  component: Page,
};

export const Primary = () => <Page text="" />;
export const SmallText = () => <Page text="Hi" />;
export const LargeText = () => <Page text="HI this is suresh" />;
export const NumbersText = () => <Page text="29832983293" />;
