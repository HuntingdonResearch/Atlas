import PanelBlock from './PanelBlock';
import PanelTabContent from './PanelTabContent';
import PanelHeading from './PanelHeading';
import PanelIcon from './PanelIcon';
import PanelTab from './PanelTab';
import PanelTabs from './PanelTabs';

export interface PanelSubComponents {
  Heading: typeof PanelHeading;

  Block: typeof PanelBlock;

  TabContent: typeof PanelTabContent;

  Tabs: typeof PanelTabs;

  Tab: typeof PanelTab;

  Icon: typeof PanelIcon;
}
