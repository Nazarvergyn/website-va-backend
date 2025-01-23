import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyBranding extends Struct.ComponentSchema {
  collectionName: 'components_company_branding';
  info: {
    description: 'Company branding assets and colors';
    displayName: 'Branding';
    icon: 'palette';
  };
  attributes: {
    favicon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    mainColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#000000'>;
    secondaryColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#ffffff'>;
  };
}

export interface CompanyContacts extends Struct.ComponentSchema {
  collectionName: 'components_company_contacts';
  info: {
    description: 'Company contact information';
    displayName: 'Contacts';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    workingHours: Schema.Attribute.String;
  };
}

export interface CompanyLegal extends Struct.ComponentSchema {
  collectionName: 'components_company_legal';
  info: {
    description: 'Company legal information';
    displayName: 'Legal';
    icon: 'balance-scale';
  };
  attributes: {
    companyNumber: Schema.Attribute.String;
    privacyUrl: Schema.Attribute.String;
    registeredAddress: Schema.Attribute.Text;
    termsUrl: Schema.Attribute.String;
    vatNumber: Schema.Attribute.String;
  };
}

export interface CompanySocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_company_social_links';
  info: {
    description: 'Company social media links';
    displayName: 'Social Links';
    icon: 'share-alt';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    github: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface FieldsServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_fields_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    serviceItem: Schema.Attribute.String;
  };
}

export interface SectionsAboutUsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_us_features';
  info: {
    displayName: 'AboutUsFeatures';
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    itemData1: Schema.Attribute.String;
    itemData2: Schema.Attribute.String;
    itemData3: Schema.Attribute.String;
    itemData4: Schema.Attribute.String;
    itemIMG1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemIMG2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemIMG3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemIMG4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemTitle1: Schema.Attribute.String;
    itemTitle2: Schema.Attribute.String;
    itemTitle3: Schema.Attribute.String;
    itemTitle4: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SectionsProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_section';
  info: {
    description: 'Content sections for projects (Research, Design, Development)';
    displayName: 'Project Section';
    icon: 'align-left';
  };
  attributes: {
    additionalContent: Schema.Attribute.RichText;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['research', 'design', 'development']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'research'>;
  };
}

export interface SectionsService extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    imgService: Schema.Attribute.Media<'images' | 'files'>;
    serviceItem: Schema.Attribute.Component<'fields.service-item', true>;
    serviceName: Schema.Attribute.String;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    description: 'SEO metadata fields';
    displayName: 'Metadata';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    isPublished: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
    noFollow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'profile', 'book']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    readingTime: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
  };
}

export interface TestNazarVerhun extends Struct.ComponentSchema {
  collectionName: 'components_test_nazar_verhuns';
  info: {
    displayName: 'Nazar Verhun';
  };
  attributes: {
    Nazar: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company.branding': CompanyBranding;
      'company.contacts': CompanyContacts;
      'company.legal': CompanyLegal;
      'company.social-links': CompanySocialLinks;
      'fields.service-item': FieldsServiceItem;
      'sections.about-us-features': SectionsAboutUsFeatures;
      'sections.hero': SectionsHero;
      'sections.project-section': SectionsProjectSection;
      'sections.service': SectionsService;
      'seo.metadata': SeoMetadata;
      'test.nazar-verhun': TestNazarVerhun;
    }
  }
}
