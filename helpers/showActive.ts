interface showActiveInterface {
    isActive: boolean;
}
export const showActive = ({ isActive }:showActiveInterface) => {
    return isActive ? "text-emerald-300  " : "";

}