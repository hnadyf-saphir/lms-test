import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAbout extends Struct.ComponentSchema {
  collectionName: 'components_blocks_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    descr: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    primary_title: Schema.Attribute.String;
    secondary_title: Schema.Attribute.String;
  };
}

export interface BlocksCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'features';
  };
  attributes: {
    descr: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    titre: Schema.Attribute.String;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    LogoFooter: Schema.Attribute.Media<'images'>;
    menuFooter: Schema.Attribute.Component<'menu-item.menu-item', true>;
  };
}

export interface BlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    menuPrincipal: Schema.Attribute.Component<'blocks.navbar', false>;
    menuSuperieur: Schema.Attribute.Component<'menu-item.menu-item', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    features: Schema.Attribute.Component<'blocks.cards', true>;
    hero_image: Schema.Attribute.Media<'images'>;
    primary_Title: Schema.Attribute.String;
    secondary_Title: Schema.Attribute.String;
  };
}

export interface BlocksNavbar extends Struct.ComponentSchema {
  collectionName: 'components_blocks_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    menu: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    menuItem: Schema.Attribute.Component<'menu-item.menu-item', true>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface MenuItemMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_item_menu_items';
  info: {
    displayName: 'menuItem';
  };
  attributes: {
    lienItem: Schema.Attribute.String;
    submenu: Schema.Attribute.Component<'submenu.submenu', true>;
    textItem: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SubmenuSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_submenu_submenus';
  info: {
    displayName: 'submenu';
  };
  attributes: {
    subLink: Schema.Attribute.String;
    subText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about': BlocksAbout;
      'blocks.cards': BlocksCards;
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'blocks.hero': BlocksHero;
      'blocks.navbar': BlocksNavbar;
      'cta.cta': CtaCta;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'menu-item.menu-item': MenuItemMenuItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'submenu.submenu': SubmenuSubmenu;
    }
  }
}
