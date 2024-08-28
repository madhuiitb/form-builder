import supabase from "./supabase";


export const getMatchingForms = async (formName) => {
    const { data, error } = await supabase
        .from('forms')
        .select('*')
        .eq('form_name', formName);

    if (error) {
        console.error('Error fetching rows:', error);
    } else {
        console.log('Rows fetched:', data);
    }
    return data;
};
