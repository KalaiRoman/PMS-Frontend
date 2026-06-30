import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import projectSchema from "../../validation/projectSchema";
import { InputBox } from "../../components/inputs/UiInputs";
import ButtonBox from "../../components/buttons/Buttons";
import HOC from "../../utils/hoc/HOC";
import { useEffect } from "react";
import { createProject } from "../../redux/actions/ProjectActions";
import colors from "../../constants/colors-constant";
function ProjectForm(props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      clientName: "",
      projectLead: "",
      users: [],
      description: "",
    },
  });

  const userOptions = [
    { value: "1", label: "John" },
    { value: "2", label: "David" },
    { value: "3", label: "Alex" },
    { value: "4", label: "Robert" },
    { value: "5", label: "Williams" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    props.dispatch(createProject(data));
    props.handleClose();
  };

  useEffect(()=>{
    console.log(props.state,"kalai")
  },[props.state])

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <label className="label">
              Project Name <span className="star">*</span>
            </label>
            <InputBox
              type="text"
              placeholder="Enter Project Name"
              {...register("projectName")}
            />
            <p className="error">{errors.projectName?.message}</p>
          </div>
          <div className="col-lg-6 mb-3">
            <label className="label">
              Client Name <span className="star">*</span>
            </label>
            <InputBox
              type="text"
              placeholder="Enter Client Name"
              {...register("clientName")}
            />
            <p className="error">{errors.clientName?.message}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-3">
            <label className="label">
              Project Lead <span className="star">*</span>
            </label>
            <select
              className="form-control"
              {...register("projectLead")}
            >
              <option value="" selected disableda>Select Project Lead</option>
              {userOptions.map((user) => (
                <option
                  key={user.value}
                  value={user.value}
                >
                  {user.label}
                </option>
              ))}
            </select>

            <p className="error">{errors.projectLead?.message}</p>
          </div>

          {/* Users */}

          <div className="col-lg-6 mb-3">
            <label className="label">
              Users <span className="star">*</span>
            </label>

            <Controller
              name="users"
              control={control}
              render={({ field }) => (
                <Select
                  isMulti
                  options={userOptions}
                  placeholder="Select Users"
                  closeMenuOnSelect={false}
                  value={userOptions.filter((option) =>
                    field.value.includes(option.value)
                  )}
                  onChange={(selected) =>
                    field.onChange(
                      selected
                        ? selected.map((item) => item.value)
                        : []
                    )
                  }
                />
              )}
            />

            <p className="error">{errors.users?.message}</p>
          </div>
        </div>

        <div className="row">
          {/* Description */}

         

             <div className="col-lg-6 mb-3">
            <label className="label">
              Colors <span className="star">*</span> <span>{watch("color")}</span>
            </label>

           <select
              className="form-control"
              {...register("color")}
            >
              <option value="" disabled selected>Select Colors</option>
              {colors?.map((user) => (
                <option
                  key={user.hex}
                  value={user.hex}
                >
                  {user.name}
                </option>
              ))}
            </select>

            <p className="error">{errors.color?.message}</p>
          </div>

           <div className="col-lg-6 mb-3">
            <label className="label">
              Description <span className="star">*</span>
            </label>

            <textarea
              className="form-control"
              rows={2}
              placeholder="Enter Description"
              {...register("description")}
            />

            <p className="error">{errors.description?.message}</p>
          </div>

       
        </div>

           <div className="col-lg-12">
            <ButtonBox
                  type="submit"

              className="btn-blue"
            >
              Create Project
            </ButtonBox>
          </div>
      </form>
    </div>
  );
}


export default HOC(ProjectForm);