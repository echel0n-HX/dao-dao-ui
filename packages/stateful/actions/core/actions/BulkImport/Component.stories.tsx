import { ComponentMeta, ComponentStory } from '@storybook/react'

import {
  ReactHookFormDecorator,
  makeDaoInfo,
  makeDaoProvidersDecorator,
} from '@dao-dao/storybook'

import { SuspenseLoader } from '../../../../components/SuspenseLoader'
import { Trans } from '../../../../components/Trans'
import { BulkImportComponent } from './Component'

export default {
  title:
    'DAO DAO / packages / stateful / actions / core / advanced / BulkImportComponent',
  component: BulkImportComponent,
  decorators: [
    makeDaoProvidersDecorator(makeDaoInfo()),
    ReactHookFormDecorator,
  ],
} as ComponentMeta<typeof BulkImportComponent>

const Template: ComponentStory<typeof BulkImportComponent> = (args) => (
  <BulkImportComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  fieldNamePrefix: '',
  allActionsWithData: [],
  index: 0,
  data: {},
  isCreating: true,
  errors: {},
  options: {
    SuspenseLoader,
    Trans,
  },
}
