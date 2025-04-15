"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Instagram, InstagramIcon as Tiktok, DiscIcon as Discord } from "lucide-react"
import PageTransition from "@/components/PageTransition"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Cybersecurity enthusiast and developer. I love working with encryption tools and exploring new security techniques.",
    avatarUrl: "",
    github: "johndoe",
    instagram: "johndoe",
    tiktok: "johndoe",
    discord: "johndoe#1234",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(profile)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setProfile(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(profile)
    setIsEditing(false)
  }

  return (
    <PageTransition>
      <div className="container px-4 py-12 mx-auto">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Profile</CardTitle>
            <CardDescription>View and manage your profile information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profile.avatarUrl || "/placeholder.svg"} alt={profile.name} />
                <AvatarFallback>
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              {!isEditing ? (
                <>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-center text-muted-foreground max-w-md">{profile.bio}</p>
                </>
              ) : (
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avatarUrl">Avatar URL</Label>
                    <Input
                      id="avatarUrl"
                      name="avatarUrl"
                      value={formData.avatarUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                </div>
              )}
            </div>

            {!isEditing ? (
              <div className="flex justify-center space-x-4">
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={`https://instagram.com/${profile.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href={`https://tiktok.com/@${profile.tiktok}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted"
                >
                  <Tiktok className="h-6 w-6" />
                </a>
                <a
                  href={`https://discord.com/users/${profile.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted"
                >
                  <Discord className="h-6 w-6" />
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tiktok">TikTok</Label>
                    <Input
                      id="tiktok"
                      name="tiktok"
                      value={formData.tiktok}
                      onChange={handleChange}
                      placeholder="username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discord">Discord</Label>
                    <Input
                      id="discord"
                      name="discord"
                      value={formData.discord}
                      onChange={handleChange}
                      placeholder="username#tag"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end">
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            ) : (
              <div className="space-x-2">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
