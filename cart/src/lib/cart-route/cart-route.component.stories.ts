import { Meta } from '@storybook/angular';
import { CartRouteComponent } from './cart-route.component';

export default {
  title: 'CartRouteComponent',
  component: CartRouteComponent,
} as Meta<CartRouteComponent>;

export const Primary = {
  render: (args: CartRouteComponent) => ({
    props: args,
  }),
  args: {},
};
