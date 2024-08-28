import supabase from "./supabase";

export async function getDashboard() {
    
    const { data, error } = await supabase
        .from('view')
        .select('*')
    if (error) {
        console.log(error);
        throw new Error('Dashboard could not be loaded')
    }
    return data;
}


export async function deleteDashbordItem(id) {

    const { data, error } = await supabase
        .from('view')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting row:', error);
    } else {
        console.log('Row deleted:', data);
    }

}

export async function deleteMatchingRow(formName) {

    const { error } = await supabase
        .from('forms')
        .delete()
        .eq('some_column', formName)
    if (error) {
        console.log(error);
        throw new Error('Dashboard could not be loaded')
    }
}