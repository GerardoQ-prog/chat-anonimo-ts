import { GroupType } from "../../store/types/groups";
import { UserType } from "../../store/types/user";

export const searchWordInArray = (array: GroupType[] | UserType[] , word: string) => {
    let newArray = array.filter(
      (item) => item.name.toLowerCase().trim().indexOf(word.toLowerCase().trim()) > -1
    );
    return newArray;
};
  