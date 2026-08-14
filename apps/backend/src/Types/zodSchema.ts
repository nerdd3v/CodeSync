import z from "zod"

export const signupSchema  = z.object({
    username: z.string().min(4).max(50),
    password: z.string().min(8),
    role: z.enum(["Candidate", "Interviewer"])
})

