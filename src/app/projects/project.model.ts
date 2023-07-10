export enum ProjectStatus {
    Active = 'Active',
    NotStarted = 'NotStarted',
    Cancelled = 'Cancelled',
    Completed = 'Completed',
}

export class Project {
    constructor(
        public name: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public status: ProjectStatus,
    ) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }
}
