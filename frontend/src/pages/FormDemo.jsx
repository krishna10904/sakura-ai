import { useState } from "react";

import Input from "../components/Input.jsx";
import TextArea from "../components/TextArea.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

function FormDemo() {
    const [name, setName] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            name,
            jobDescription,
        });
    };

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-2xl">

                {/* Header */}

                <div className="mb-8">

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
                        Sakura AI
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-white">
                        Career Analysis
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Paste a job description and let Sakura
                        analyze the required skills.
                    </p>

                </div>

                {/* Form */}

                <Card>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <Input
                            label="Your Name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            required
                        />

                        <TextArea
                            label="Job Description"
                            name="jobDescription"
                            placeholder="Paste the job description here..."
                            value={jobDescription}
                            onChange={(event) =>
                                setJobDescription(event.target.value)
                            }
                            rows={8}
                            required
                        />

                        <div className="flex justify-end">
                            <Button type="submit">
                                Analyze Job →
                            </Button>
                        </div>

                    </form>

                </Card>

            </div>

        </div>
    );
}

export default FormDemo;