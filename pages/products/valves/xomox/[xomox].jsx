import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../../../prismicio'
import { components } from '../../../../slices'
import Layout from '../../../../components/Layout'
const xomox = ({ xomox, navigation, settings, footer }) => {
    return (
        <div>
            <Layout
                navigation={navigation}
                settings={settings}
                footer={footer}
            >
                <SliceZone slices={xomox.data.slices} components={components} />
            </Layout>
        </div>
    );
};

export default xomox

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    const xomox = await client.getByUID("xomox", params.xomox);
    const navigation = await client.getByUID("navigation", "navigation");
    const settings = await client.getSingle("settings");
    const footer = await client.getByUID("footer", "footer");
    return {
        props: {
            xomox,
            navigation,
            settings,
            footer,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient()

    const xomox = await client.getAllByType('xomox')

    return {
        paths: xomox.map((xomox) => prismicH.asLink(xomox, linkResolver)),
        fallback: false,
    }
}