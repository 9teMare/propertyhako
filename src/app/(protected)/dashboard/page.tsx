import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <main className="flex flex-1 flex-col gap-6 p-6 text-black dark:text-white">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-500 dark:text-gray-400">View and manage your projects here.</p>
            </div>
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Project A</CardTitle>
                        <CardDescription>This is a description of Project A. It includes details about the project and its status.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl,
                            eget aliquam nisl nisl vel nisl.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project B</CardTitle>
                        <CardDescription>This is a description of Project B. It includes details about the project and its status.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl,
                            eget aliquam nisl nisl vel nisl.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
