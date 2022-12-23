import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../../../prismicio'
import { components } from '../../../../slices'
import Layout from '../../../../components/Layout'
const aloyco_valves = ({ aloyco_valves, navigation, settings, footer }) => {
    return (
        <div>
            <Layout
                navigation={navigation}
                settings={settings}
                footer={footer}
            >
                <SliceZone slices={aloyco_valves.data.slices} components={components} />
            </Layout>
        </div>
    );
};

export default aloyco_valves

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    const aloyco_valves = await client.getByUID("aloyco_valves", params.aloyco_valves);
    const navigation = await client.getByUID("navigation", "navigation");
    const settings = await client.getSingle("settings");
    const footer = await client.getByUID("footer", "footer");
    return {
        props: {
            aloyco_valves,
            navigation,
            settings,
            footer,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient()

    const aloyco_valves = await client.getAllByType('aloyco_valves')

    return {
        paths: aloyco_valves.map((aloyco_valves) => prismicH.asLink(aloyco_valves, linkResolver)),
        fallback: false,
    }
}