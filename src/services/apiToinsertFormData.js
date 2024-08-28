
import supabase from "./supabase";

// export const uploadFeedbackForm = async ({ formData }) => {

//     const { data, error } = await supabase
//         .from('forms')
//         .insert([formData]
// );

//     if (error) {
//         console.error('Error inserting data:', error);
//     } else {
//         console.log('Data inserted successfully:', data);
//     }
// }

export async function insertFormData(formPayload) {
    const { data, error } = await supabase
        .from('forms')
        .insert([formPayload]);

    if (error) {
        console.error('Error inserting data:', error);
        return { success: false, error };
    } else {
        console.log('Data inserted successfully:', data);
        return { success: true, data };
    }
}

export async function getFormData() {

    const { data, error } = await supabase
        .from('forms')
        .select('*')
    if (error) {
        console.log(error);
        throw new Error('Dashboard could not be loaded')
    }
    return data;
}