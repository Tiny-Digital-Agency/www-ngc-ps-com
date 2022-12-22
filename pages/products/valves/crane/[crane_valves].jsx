import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../../../prismicio'
import { components } from '../../../../slices'
import Layout from '../../../../components/Layout'
const crane_valves = ({ crane_valves, navigation, settings, footer }) => {
    return (
        <div>
            <Layout
                navigation={navigation}
                settings={settings}
                footer={footer}
            >
                <SliceZone slices={crane_valves.data.slices} components={components} />
            </Layout>
        </div>
    );
};

export default crane_valves

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    const crane_valves = await client.getByUID("crane_valves", params.crane_valves);
    const navigation = await client.getByUID("navigation", "navigation");
    const settings = await client.getSingle("settings");
    const footer = await client.getByUID("footer", "footer");
    return {
        props: {
            crane_valves,
            navigation,
            settings,
            footer,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient()

    const crane_valves = await client.getAllByType('crane_valves')

    return {
        paths: crane_valves.map((crane_valves) => prismicH.asLink(crane_valves, linkResolver)),
        fallback: false,
    }
}