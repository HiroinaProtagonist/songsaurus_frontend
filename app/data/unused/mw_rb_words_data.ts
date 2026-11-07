//
// import { matchSorter } from "match-sorter";
// import sortBy from "sort-by";
// import invariant from "tiny-invariant";
//
// type CloudMutation = {
//     id?: string;
//     title?: string;
//     elements?: string;
//     refString: string;
// };
//
// export type ElementType = {
//     word: string;
//     freq: string;
// }
//
// export type CloudRecord = CloudMutation & {
//     refString: string;  //Original string from which cloud is generated - title^word:freq,word:freq,word:freq;
// }
//
// export type reactWordCloud = {
//     text: string,
//     value: number
// }
//
// ///FAKE db
// const servedClouds = {
//     records: {} as Record<string, CloudRecord>,
//
//     async getAll(): Promise<CloudRecord[]> {
//         console.log(`GetClouds: ${Object.keys(servedClouds.records)}`);
//         return Object.keys(servedClouds.records)
//             .map((key) => servedClouds.records[key])
//             .sort(sortBy("-title"));
//     },
//
//     async get(id: string): Promise<CloudRecord | null> {
//         return servedClouds.records[id] || null;
//     },
//
//     async create(values: CloudMutation): Promise<CloudRecord> {
//         const ref = values.refString;
//         invariant(ref, 'Data not provided - Please include refString');
//
//         const id = values.title || Math.random().toString(36).substring(2,9);  //random 7-dig alphanum value
//
//         const cloud = {
//             id:id,
//             refString:values.refString,
//             title:values.refString.split("^")[0],
//             elements:values.refString.split("^")[1]
//         };
//
//         servedClouds.records[id] = cloud;
//         return cloud;
//     },
//
//     async set(id: string, values: CloudMutation): Promise<CloudRecord> {
//         const cloud = await servedClouds.get(id);
//         invariant(cloud, `No cloud found with ${id}`);
//         const updatedCloud = {...cloud, ...values};
//         servedClouds.records[id] = updatedCloud;
//         return updatedCloud;
//     },
//
//     destroy(id: string) {
//         const cloud = servedClouds.get(id);
//         delete servedClouds.records[id];
//         return cloud;
//     },
// };
//
// //////Helpers to access fake db
// export async function getClouds(query?: string | null) {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     let clouds = await servedClouds.getAll();
//     if (query) {
//         clouds = matchSorter(clouds, query);
//     }
//     return clouds.sort(sortBy("title"));
// }
//
// export async function getCloud(id: string) {
//     return servedClouds.get(id);
// }
//
// export async function createEmptyCloud() {
//     const cloud = await servedClouds.create({refString:''});
//     return cloud;
// }
//
// export async function createCloud(refString: string) {
//     invariant(checkInput(refString), 'Check format of import string');
//     const cloud = await servedClouds.create({refString: refString});
//     return cloud;
// }
//
// export async function updateCloud(id: string, updates: CloudMutation) {
//     const cloud = await servedClouds.get(id);
//     if (!cloud) {
//         throw new Error(`No cloud found with ${id}`);
//     }
//
//     await servedClouds.set(id, {...cloud, ...updates});
//     return cloud;
// }
//
// export async function deleteCloud(id: string) {
//     await servedClouds.destroy(id);
// }
//
// [
//     {
//         title:'plus',
//         elements:'joyful:54,happy:75',
//     },
//     {
//         title:'weather',
//         elements:'snow:54,rain:75,sun:600,fog:400,windy:10,hailstones:4000',
//     },
//     {
//         title:'colors',
//         elements:'red:50,yellow:4,turquoise:11,pink:800,purple:95,blue:650,lilac:30,silver:20,gold:30,bronze:45,hyacinth:81',
//     }
// ].forEach((cloud) => {
//     servedClouds.create({
//         ...cloud,
//         id: `${cloud.title}`,
//         refString: `${cloud.title}^${cloud.elements};`
//     });
// });
//
//
