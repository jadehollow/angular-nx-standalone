import { Meta } from '@storybook/angular';
import { ShopComponent } from './shop.component';

export default {
  title: 'ShopComponent',
  component: ShopComponent,
} as Meta<ShopComponent>;

export const Primary = {
  render: (args: ShopComponent) => ({
    props: args,
  }),
  args: {},
};
