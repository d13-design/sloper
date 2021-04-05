import { Card } from '@sloper/card-vue';
import '@sloper/card-styles/dist/styles.css';

export default {
  title: 'Patterns/Card',
  component: Card
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card v-bind="$props">{{ slotContent }}</card>',
});

export const Default = Template.bind({});
Default.args = {
  slotContent: 'This is a card'
};

