// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for homepage documents */
interface HomepageDocumentData {
    /**
     * Title field in *homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = TopNavSlice | HeaderSlice | HeroSectionSlice | AboutSlice | CertificationSlice | TeamProfileSlice | TeamDropdownSlice | FooterSlice | GridSectionSlice;
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for page documents */
interface PageDocumentData {
    /**
     * Title field in *page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = CallToActionSlice | GridSectionSlice | CardsSectionSlice | BannerWithMiddleContentSlice | BannerSectionSideContentSlice | HeroSectionSlice | SidebarDropdownWithContentSlice | ResourcesSlice;
/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomepageDocument | PageDocument;
/**
 * Primary content in About → Primary
 *
 */
interface AboutSliceDefaultPrimary {
    /**
     * heading field in *About → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * Paragraph field in *About → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.primary.paragraph_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph_1: prismicT.RichTextField;
    /**
     * List title field in *About → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.primary.list_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    list_title: prismicT.RichTextField;
    /**
     * List field in *About → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.primary.list
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    list: prismicT.RichTextField;
}
/**
 * Item in About → Items
 *
 */
export interface AboutSliceDefaultItem {
    /**
     * Image field in *About → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *About → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
}
/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: `About`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutSliceDefaultPrimary>, Simplify<AboutSliceDefaultItem>>;
/**
 * Slice variation for *About*
 *
 */
type AboutSliceVariation = AboutSliceDefault;
/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: `About`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSlice = prismicT.SharedSlice<"about", AboutSliceVariation>;
/**
 * Primary content in BannerSectionMiddleContent → Primary
 *
 */
interface BannerWithMiddleContentSliceDefaultPrimary {
    /**
     * Title field in *BannerSectionMiddleContent → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: banner_with_middle_content.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * backgroundimage field in *BannerSectionMiddleContent → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: banner_with_middle_content.primary.backgroundimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    backgroundimage: prismicT.ImageField<never>;
}
/**
 * Default variation for BannerSectionMiddleContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BannerWithMiddleContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerWithMiddleContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BannerWithMiddleContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BannerSectionMiddleContent*
 *
 */
type BannerWithMiddleContentSliceVariation = BannerWithMiddleContentSliceDefault;
/**
 * BannerSectionMiddleContent Shared Slice
 *
 * - **API ID**: `banner_with_middle_content`
 * - **Description**: `BannerWithMiddleContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerWithMiddleContentSlice = prismicT.SharedSlice<"banner_with_middle_content", BannerWithMiddleContentSliceVariation>;
/**
 * Primary content in BannerSectionSideContent → Primary
 *
 */
interface BannerSectionSideContentSliceDefaultPrimary {
    /**
     * Title field in *BannerSectionSideContent → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: banner_section_side_content.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *BannerSectionSideContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: banner_section_side_content.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * backgroundimage field in *BannerSectionSideContent → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: banner_section_side_content.primary.backgroundimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    backgroundimage: prismicT.ImageField<never>;
}
/**
 * Default variation for BannerSectionSideContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BannerSectionSideContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerSectionSideContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BannerSectionSideContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BannerSectionSideContent*
 *
 */
type BannerSectionSideContentSliceVariation = BannerSectionSideContentSliceDefault;
/**
 * BannerSectionSideContent Shared Slice
 *
 * - **API ID**: `banner_section_side_content`
 * - **Description**: `BannerSectionSideContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerSectionSideContentSlice = prismicT.SharedSlice<"banner_section_side_content", BannerSectionSideContentSliceVariation>;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceDefaultPrimary {
    /**
     * Title field in *CallToAction → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: call_to_action.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *CallToAction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: call_to_action.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *CallToAction → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CallToActionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CallToAction*
 *
 */
type CallToActionSliceVariation = CallToActionSliceDefault;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSlice = prismicT.SharedSlice<"call_to_action", CallToActionSliceVariation>;
/**
 * Primary content in CardsSection → Primary
 *
 */
interface CardsSectionSliceDefaultPrimary {
    /**
     * Title field in *CardsSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: cards_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in CardsSection → Items
 *
 */
export interface CardsSectionSliceDefaultItem {
    /**
     * backgroundimage field in *CardsSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: cards_section.items[].backgroundimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    backgroundimage: prismicT.ImageField<never>;
    /**
     * cardtitle field in *CardsSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cards_section.items[].cardtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cardtitle: prismicT.RichTextField;
    /**
     * cardlink field in *CardsSection → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cards_section.items[].cardlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cardlink: prismicT.LinkField;
}
/**
 * Default variation for CardsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CardsSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardsSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CardsSectionSliceDefaultPrimary>, Simplify<CardsSectionSliceDefaultItem>>;
/**
 * Slice variation for *CardsSection*
 *
 */
type CardsSectionSliceVariation = CardsSectionSliceDefault;
/**
 * CardsSection Shared Slice
 *
 * - **API ID**: `cards_section`
 * - **Description**: `CardsSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardsSectionSlice = prismicT.SharedSlice<"cards_section", CardsSectionSliceVariation>;
/**
 * Item in Certification → Items
 *
 */
export interface CertificationSliceDefaultItem {
    /**
     * Image field in *Certification → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: certification.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Image link field in *Certification → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: certification.items[].image_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    image_link: prismicT.LinkField;
}
/**
 * Default variation for Certification Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Certification`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CertificationSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<CertificationSliceDefaultItem>>;
/**
 * Slice variation for *Certification*
 *
 */
type CertificationSliceVariation = CertificationSliceDefault;
/**
 * Certification Shared Slice
 *
 * - **API ID**: `certification`
 * - **Description**: `Certification`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CertificationSlice = prismicT.SharedSlice<"certification", CertificationSliceVariation>;
/**
 * Primary content in Footer → Primary
 *
 */
interface FooterSliceDefaultPrimary {
    /**
     * logo field in *Footer → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Item in Footer → Items
 *
 */
export interface FooterSliceDefaultItem {
    /**
     * contact details field in *Footer → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.items[].contact_details
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_details: prismicT.RichTextField;
    /**
     * Nav link field in *Footer → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.items[].nav_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    nav_link: prismicT.LinkField;
}
/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, Simplify<FooterSliceDefaultItem>>;
/**
 * Slice variation for *Footer*
 *
 */
type FooterSliceVariation = FooterSliceDefault;
/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSlice = prismicT.SharedSlice<"footer", FooterSliceVariation>;
/**
 * Primary content in GridSection → Primary
 *
 */
interface GridSectionSliceDefaultPrimary {
    /**
     * Title field in *GridSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: grid_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in GridSection → Items
 *
 */
export interface GridSectionSliceDefaultItem {
    /**
     * LogoImage field in *GridSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_section.items[].logoimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logoimage: prismicT.ImageField<never>;
    /**
     * GridContent field in *GridSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_section.items[].gridcontent
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    gridcontent: prismicT.RichTextField;
    /**
     * GridLink field in *GridSection → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_section.items[].gridlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    gridlink: prismicT.LinkField;
}
/**
 * Default variation for GridSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `GridSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GridSectionSliceDefaultPrimary>, Simplify<GridSectionSliceDefaultItem>>;
/**
 * Slice variation for *GridSection*
 *
 */
type GridSectionSliceVariation = GridSectionSliceDefault;
/**
 * GridSection Shared Slice
 *
 * - **API ID**: `grid_section`
 * - **Description**: `GridSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridSectionSlice = prismicT.SharedSlice<"grid_section", GridSectionSliceVariation>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
    /**
     * logo field in *Header → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Hamburger field in *Header → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.hamburger
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    hamburger: prismicT.RichTextField;
}
/**
 * Item in Header → Items
 *
 */
export interface HeaderSliceDefaultItem {
    /**
     * Nav link field in *Header → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header.items[].nav_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    nav_link: prismicT.LinkField;
    /**
     * Nav dropdown field in *Header → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: header.items[].nav_dropdown
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    nav_dropdown: prismicT.SelectField<"1" | "2">;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderSliceDefaultPrimary>, Simplify<HeaderSliceDefaultItem>>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismicT.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in HeroSection → Primary
 *
 */
interface HeroSectionSliceDefaultPrimary {
    /**
     * Banner Background Image field in *HeroSection → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_section.primary.banner
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * heading field in *HeroSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_section.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * Button Title field in *HeroSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_section.primary.ButtonTitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    ButtonTitle: prismicT.RichTextField;
    /**
     * Button Content field in *HeroSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_section.primary.ButtonContent
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    ButtonContent: prismicT.RichTextField;
}
/**
 * Item in HeroSection → Items
 *
 */
export interface HeroSectionSliceDefaultItem {
    /**
     * image field in *HeroSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_section.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * image title field in *HeroSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_section.items[].image_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    image_title: prismicT.RichTextField;
}
/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSectionSliceDefaultPrimary>, Simplify<HeroSectionSliceDefaultItem>>;
/**
 * Slice variation for *HeroSection*
 *
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;
/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: `HeroSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSectionSlice = prismicT.SharedSlice<"hero_section", HeroSectionSliceVariation>;
/**
 * Primary content in News → Primary
 *
 */
interface NewsSliceDefaultPrimary {
    /**
     * Background Image field in *News → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: news.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
    /**
     * News content field in *News → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: news.primary.news_content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    news_content: prismicT.RichTextField;
}
/**
 * Default variation for News Slice
 *
 * - **API ID**: `default`
 * - **Description**: `News`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NewsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *News*
 *
 */
type NewsSliceVariation = NewsSliceDefault;
/**
 * News Shared Slice
 *
 * - **API ID**: `news`
 * - **Description**: `News`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsSlice = prismicT.SharedSlice<"news", NewsSliceVariation>;
/**
 * Primary content in Resources → Primary
 *
 */
interface ResourcesSliceDefaultPrimary {
    /**
     * Title field in *Resources → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: resources.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Resources → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: resources.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Resources → Items
 *
 */
export interface ResourcesSliceDefaultItem {
    /**
     * text field in *Resources → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Resources Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Resources`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ResourcesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ResourcesSliceDefaultPrimary>, Simplify<ResourcesSliceDefaultItem>>;
/**
 * Slice variation for *Resources*
 *
 */
type ResourcesSliceVariation = ResourcesSliceDefault;
/**
 * Resources Shared Slice
 *
 * - **API ID**: `resources`
 * - **Description**: `Resources`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ResourcesSlice = prismicT.SharedSlice<"resources", ResourcesSliceVariation>;
/**
 * Primary content in SidebarDropdownWithContent → Primary
 *
 */
interface SidebarDropdownWithContentSliceDefaultPrimary {
    /**
     * Title field in *SidebarDropdownWithContent → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: sidebar_dropdown_with_content.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in SidebarDropdownWithContent → Items
 *
 */
export interface SidebarDropdownWithContentSliceDefaultItem {
    /**
     * Title field in *SidebarDropdownWithContent → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sidebar_dropdown_with_content.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * content field in *SidebarDropdownWithContent → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sidebar_dropdown_with_content.items[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Title Menu field in *SidebarDropdownWithContent → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sidebar_dropdown_with_content.items[].titlemenu
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    titlemenu: prismicT.RichTextField;
    /**
     * Turn Into Menu field in *SidebarDropdownWithContent → Items*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: sidebar_dropdown_with_content.items[].turnintomenu
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    turnintomenu: prismicT.BooleanField;
    /**
     * Menu items child field in *SidebarDropdownWithContent → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sidebar_dropdown_with_content.items[].menu_items_child
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    menu_items_child: prismicT.RichTextField;
}
/**
 * Default variation for SidebarDropdownWithContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SidebarDropdownWithContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SidebarDropdownWithContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SidebarDropdownWithContentSliceDefaultPrimary>, Simplify<SidebarDropdownWithContentSliceDefaultItem>>;
/**
 * Slice variation for *SidebarDropdownWithContent*
 *
 */
type SidebarDropdownWithContentSliceVariation = SidebarDropdownWithContentSliceDefault;
/**
 * SidebarDropdownWithContent Shared Slice
 *
 * - **API ID**: `sidebar_dropdown_with_content`
 * - **Description**: `SidebarDropdownWithContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SidebarDropdownWithContentSlice = prismicT.SharedSlice<"sidebar_dropdown_with_content", SidebarDropdownWithContentSliceVariation>;
/**
 * Item in TeamDropdown → Items
 *
 */
export interface TeamDropdownSliceDefaultItem {
    /**
     * profile image field in *TeamDropdown → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: team_dropdown.items[].profile_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile_image: prismicT.ImageField<never>;
    /**
     * Name field in *TeamDropdown → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: team_dropdown.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Position field in *TeamDropdown → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: team_dropdown.items[].position
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    position: prismicT.RichTextField;
    /**
     * description field in *TeamDropdown → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: team_dropdown.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for TeamDropdown Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TeamDropdown`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TeamDropdownSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<TeamDropdownSliceDefaultItem>>;
/**
 * Slice variation for *TeamDropdown*
 *
 */
type TeamDropdownSliceVariation = TeamDropdownSliceDefault;
/**
 * TeamDropdown Shared Slice
 *
 * - **API ID**: `team_dropdown`
 * - **Description**: `TeamDropdown`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TeamDropdownSlice = prismicT.SharedSlice<"team_dropdown", TeamDropdownSliceVariation>;
/**
 * Primary content in TeamProfile → Primary
 *
 */
interface TeamProfileSliceDefaultPrimary {
    /**
     * Background Image field in *TeamProfile → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: team_profile.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
    /**
     * Team Content field in *TeamProfile → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: team_profile.primary.team_content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    team_content: prismicT.RichTextField;
}
/**
 * Default variation for TeamProfile Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TeamProfile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TeamProfileSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TeamProfileSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TeamProfile*
 *
 */
type TeamProfileSliceVariation = TeamProfileSliceDefault;
/**
 * TeamProfile Shared Slice
 *
 * - **API ID**: `team_profile`
 * - **Description**: `TeamProfile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TeamProfileSlice = prismicT.SharedSlice<"team_profile", TeamProfileSliceVariation>;
/**
 * Primary content in TopNav → Primary
 *
 */
interface TopNavSliceDefaultPrimary {
    /**
     * button link field in *TopNav → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: top_nav.primary.button
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button: prismicT.RelationField<"homepage">;
    /**
     * Button Text field in *TopNav → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: top_nav.primary.button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    button_text: prismicT.RichTextField;
}
/**
 * Item in TopNav → Items
 *
 */
export interface TopNavSliceDefaultItem {
    /**
     * Contact details field in *TopNav → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: top_nav.items[].contact_details
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    contact_details: prismicT.KeyTextField;
    /**
     * link field in *TopNav → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: top_nav.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for TopNav Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TopNav`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TopNavSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TopNavSliceDefaultPrimary>, Simplify<TopNavSliceDefaultItem>>;
/**
 * Slice variation for *TopNav*
 *
 */
type TopNavSliceVariation = TopNavSliceDefault;
/**
 * TopNav Shared Slice
 *
 * - **API ID**: `top_nav`
 * - **Description**: `TopNav`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TopNavSlice = prismicT.SharedSlice<"top_nav", TopNavSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, AboutSliceDefaultPrimary, AboutSliceDefaultItem, AboutSliceDefault, AboutSliceVariation, AboutSlice, BannerWithMiddleContentSliceDefaultPrimary, BannerWithMiddleContentSliceDefault, BannerWithMiddleContentSliceVariation, BannerWithMiddleContentSlice, BannerSectionSideContentSliceDefaultPrimary, BannerSectionSideContentSliceDefault, BannerSectionSideContentSliceVariation, BannerSectionSideContentSlice, CallToActionSliceDefaultPrimary, CallToActionSliceDefault, CallToActionSliceVariation, CallToActionSlice, CardsSectionSliceDefaultPrimary, CardsSectionSliceDefaultItem, CardsSectionSliceDefault, CardsSectionSliceVariation, CardsSectionSlice, CertificationSliceDefaultItem, CertificationSliceDefault, CertificationSliceVariation, CertificationSlice, FooterSliceDefaultPrimary, FooterSliceDefaultItem, FooterSliceDefault, FooterSliceVariation, FooterSlice, GridSectionSliceDefaultPrimary, GridSectionSliceDefaultItem, GridSectionSliceDefault, GridSectionSliceVariation, GridSectionSlice, HeaderSliceDefaultPrimary, HeaderSliceDefaultItem, HeaderSliceDefault, HeaderSliceVariation, HeaderSlice, HeroSectionSliceDefaultPrimary, HeroSectionSliceDefaultItem, HeroSectionSliceDefault, HeroSectionSliceVariation, HeroSectionSlice, NewsSliceDefaultPrimary, NewsSliceDefault, NewsSliceVariation, NewsSlice, ResourcesSliceDefaultPrimary, ResourcesSliceDefaultItem, ResourcesSliceDefault, ResourcesSliceVariation, ResourcesSlice, SidebarDropdownWithContentSliceDefaultPrimary, SidebarDropdownWithContentSliceDefaultItem, SidebarDropdownWithContentSliceDefault, SidebarDropdownWithContentSliceVariation, SidebarDropdownWithContentSlice, TeamDropdownSliceDefaultItem, TeamDropdownSliceDefault, TeamDropdownSliceVariation, TeamDropdownSlice, TeamProfileSliceDefaultPrimary, TeamProfileSliceDefault, TeamProfileSliceVariation, TeamProfileSlice, TopNavSliceDefaultPrimary, TopNavSliceDefaultItem, TopNavSliceDefault, TopNavSliceVariation, TopNavSlice };
    }
}
