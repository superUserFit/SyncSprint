import React, { useState } from "react";
import {
    Card,
    CardBody,
    Flex,
    FormControl,
    Heading,
    Input,
    Textarea,
} from "@chakra-ui/react";
import MainSidebar from "../components/MainSidebar";
import SecondSidebar from "../components/SecondSidebar";
import { host } from "@/app/api/api";
import axios from "axios";



const ProjectsPage = () => {
    const [createProjectData, setCreateProjectData] = useState({
        name: "",
        description: "",
    });

    const handleCreateProjects = async () => {
        const response = await axios.post(`${host}/api/user/login`, createProjectData, {
            headers: { "Content-Type" : "application/json" }
        });

        if(response.status === 200) {
        }
    }
    return (
        <Flex>
            <MainSidebar />
            <SecondSidebar />
            <Flex>
                <Card>
                    <CardBody>
                        <form action={handleCreateProjects}>
                            <Heading>Create Projects</Heading>
                            <FormControl isRequired>
                                <Input 
                                    type="text" 
                                    placeholder="Project Name"
                                    value={createProjectData.name} 
                                    onChange={(e) => setCreateProjectData((createProjectData) => ({...createProjectData, name: e.target.value}))}  
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Textarea
                                    placeholder="Project Description"
                                    value={createProjectData.description}
                                    onChange={(e) => setCreateProjectData((createProjectData) => ({...createProjectData, description: e.target.value}))}
                                />
                            </FormControl>
                        </form>
                    </CardBody>
                </Card>
            </Flex>
        </Flex>
    );
}

export default ProjectsPage;