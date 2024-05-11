'use client'
import CodeEditorWindow from "@/components/code/CodeEditorWindow";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


import { languageOptions } from "@/constants/languageOption";
import { themeOptions } from "@/constants/themeOption";
import { useState } from "react";

const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;

export default function Page() {
    const [code, setCode] = useState(javascriptDefault);
    const [theme, setTheme] = useState("vs-dark");
    const [language, setLanguage] = useState(languageOptions[0].value);

    const onChange = (action: string, data: string) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };

    const LanguagesDropdown = ({ handleSelect, defaultValue }: { handleSelect: (value: string) => void, defaultValue: string }) => {
        return (
            <Select onValueChange={handleSelect} defaultValue={defaultValue}>
                <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    {languageOptions.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        )
    }

    const ThemesDropdown = ({ handleSelect, defaultValue }: { handleSelect: (value: string) => void, defaultValue: string }) => {
        return (
            <Select onValueChange={handleSelect} defaultValue={defaultValue}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    {themeOptions.map((option) => (
                        <SelectItem key={option.label} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        )
    }

    return (
        <main className="flex flex-1 flex-col gap-6 p-6 text-black dark:text-white">
            <div className="px-4 py-2 flex flex-row gap-4">
                <LanguagesDropdown defaultValue={language} handleSelect={(value) => {
                    setLanguage(value);
                }} />
                <ThemesDropdown defaultValue={theme} handleSelect={(value) => {
                    setTheme(value);
                }} />
            </div>
            <CodeEditorWindow theme={theme} onChange={onChange} code={code} language={language} />
        </main>
    );
}
