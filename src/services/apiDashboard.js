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