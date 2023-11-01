import { Component } from "react";


class ProjectDetails extends Component{

    constructor(){
        super();
        this.state={projectName:'unknown',managerName:'unknown',date:'unknown'}
        this.updateProjectName=this.updateProjectName.bind(this);
        this.updateManagerName=this.updateManagerName.bind(this);
        this.updateStartDate=this.updateStartDate.bind(this);
    }

    updateProjectName(event){
        // console.log(event.target.value);
        // this.setState({projectName:event.target.value});
        const input = event.target.value;
        const regex = /^[a-zA-Z0-9\s]*$/; // Regex to allow only alphanumeric characters and spaces
        if (regex.test(input) || input === "") {
          this.setState({ projectName: input, projectNameError: "" });
        } else {
          this.setState({
            projectNameError: "Project name can only contain letters, numbers, and spaces.",

          });

        }
    }

    updateManagerName(event){
        console.log(event.target.value);
        this.setState({managerName:event.target.value});
    }

    updateStartDate(event){
        console.log(event.target.value);
        this.setState({date:event.target.value}); 
    }

    render(){
        return(
            <div className="formclass">
                <center>
                <form>
                    <label>Project Name</label><input type="text" name="projectName" onChange={this.updateProjectName} /><br/>
                    <span style={{color:"red"}}>{this.state.projectNameError}</span><br/>
                    <label>Manager Name</label><input type="text" name="managerName" onChange={this.updateManagerName} /><br/>
                    <label>Start Date</label><input type="date" name="startDate" onChange={this.updateStartDate} /><br/>
                    <input type="submit" value="Save" /><br/>
                    <b>Project Name</b>&nbsp;&nbsp; <label>{this.state.projectName}&nbsp;&nbsp;</label>
                    <b>Manager Name</b>&nbsp;&nbsp; <label>{this.state.managerName}&nbsp;&nbsp;</label>
                    <b>Date</b>&nbsp;&nbsp; <label>{this.state.date}&nbsp;&nbsp;</label>
                </form>
                </center>
            </div>  
        )
    }
}

export default ProjectDetails;