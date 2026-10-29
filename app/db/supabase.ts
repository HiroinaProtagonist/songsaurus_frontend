import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const test = import.meta.env.VITE_TEST;

// console.log(test);

export const supabase = createClient(
    'https://ywekhzltsbekbxhhebqz.supabase.co',
    'sb_publishable_woTJq3QKoFheBku_F1zF_Q_wmlQekO5'
);

//Get all clouds from cloud table
export async function getDBClouds() {
    const {data, error} = await supabase.from('clouds')
        .select(`cloud_id, title, explicit, words(word_id, name, explicit)`);

    if (error) {
        console.error(error);
    } else {
        // console.log(`Data: ${JSON.stringify(data)}`);
        return data;
    }
}

// //Get single cloud by id
// export async function getCloud(id, setCloud) {
//     const {data, error} = await supabase.from('clouds').select().eq('cloud_id', id);
//
//     if (error) {
//         console.error(error);
//     } else {
//         setCloud(data);
//     }
// }
//
// //Update the name of a cloud
// export async function updateCloudName(cloud_id, name, setClouds) {
//     const {data, error} = await supabase.from('clouds')
//         .update({name: name}).eq('cloud_id', cloud_id).select();
//
//     if (error) {
//         console.error(error);
//     } else {
//         setClouds(data);
//     }
// }

//Update cloud explicit flag to true
export async function updateCloudExplicit(cloud_id, explicitFlag) {
    const {data, error} = await supabase.from('clouds')
        .update({explicit: explicitFlag}).eq('cloud_id', cloud_id).select();
}

//Delete a cloud
export async function deleteCloud(cloudId, setClouds, clouds) {
    const {data, error} = await supabase.from('clouds').delete().eq('cloud_id', cloudId);

    if (error) {
        console.error(error);
    } else {
        setClouds(clouds.filter(cloudId));
    }
}

    //Get all words from word table
    export async function getWords() {
        const {data, error} = await supabase.from('words').select('*');

        if (error) {
            console.error(error);
        } else {
            // console.log(`Data: ${JSON.stringify(data)}`);
            return data;
        }
    }

//
// //Add a word to the word table
// export async function addWord(word) {
//     const {data, error} = await supabase.from('words')
//         .insert({'word_id':word.id, 'mw_meta_id':word.metaId, 'mw_meta_uuid':word.metaUuid,
//                  'mw_tuuid': word.mwTarget.tuuid, 'mw_tsrc':word.mwTarget.tsrc,
//                  'mw_meta_src':word.metaSrc, 'mw_meta_section':word.metaSection, 'mw_hw': word.hwi.hw})
// }
//
// //Add a word to a cloud
// export async function addCloudWord(cloudId, wordId) {
//     const {data, error} = await supabase.from('clouds_words')
//         .insert({cloud_id: cloudId, word_id: wordId}).select();
//
//     if (error) {
//         console.error(error);
//     } else {
//         // TODO handle data
//     }
// }
//
// //delete a word from a cloud
// export async function deleteCloudWord(cloudId, wordId) {
//     const {data, error} = await supabase.from('clouds').delete().eq('cloud_id', cloudId);
//
//     if (error) {
//         console.error(error);
//     } else {
//         // TODO handle data
//     }
// }

//Get all words from word table
export async function getCloudsWords() {
    const {data, error} = await supabase.from('words').select('*');

    if (error) {
        console.error(error);
    } else {
        console.log(`Data: ${data}`);
        return data;
    }
}
