import { SliceZone } from '@prismicio/react'
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../../../prismicio'
import { components } from '../../../../slices'
import Layout from '../../../../components/Layout'
const pacific_valves = ({ pacific_valves, navigation, settings, footer }) => {
    return (
        <div>
            <Layout
                navigation={navigation}
                settings={settings}
                footer={footer}
            >
                <Head>
                    <title>
                        {prismicH.asText(pacific_valves.data.title)}
                        {prismicH.asText(settings.data.name)}
                    </title>
                </Head>
                <SliceZone slices={pacific_valves.data.slices} components={components} />
            </Layout>
        </div>
    );
};

export default pacific_valves

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    const pacific_valves = await client.getByUID("pacific_valves", params.pacific_valves);
    const navigation = await client.getByUID("navigation", "navigation");
    const settings = await client.getSingle("settings");
    const footer = await client.getByUID("footer", "footer");
    return {
        props: {
            pacific_valves,
            navigation,
            settings,
            footer,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient()

    const pacific_valves = await client.getAllByType('pacific_valves')

    return {
        paths: pacific_valves.map((pacific_valves) => prismicH.asLink(pacific_valves, linkResolver)),
        fallback: false,
    }
}