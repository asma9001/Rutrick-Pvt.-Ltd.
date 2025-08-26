"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
    }

    return (
        <section id="contact" className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Get In Touch</h2>
                        <p>
                            Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Contact Form */}
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle className="text-xl sm:text-2xl font-semibold text-card-foreground">
                                    Send us a message
                                </CardTitle>


                                <CardDescription className="text-sm sm:text-base">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </CardDescription>

                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your full name"
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your.email@example.com"
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project or how we can help..."
                                            required
                                            className="w-full min-h-[100px] sm:min-h-[120px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                                    Other ways to reach us
                                </h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground text-sm sm:text-base">Email</p>
                                            <p className="text-muted-foreground text-sm sm:text-base">info@rutrickpvt.ltd </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground text-sm sm:text-base">Phone</p>
                                            <p className="text-muted-foreground text-sm sm:text-base">+92 315 9161514</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground text-sm sm:text-base">Office</p>
                                            <p className="text-muted-foreground text-sm sm:text-base">
                                                123 Innovation Drive
                                                <br />
                                                Tech City, TC 12345
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
                                <h4 className="font-semibold text-card-foreground mb-3 text-sm sm:text-base">Why choose Rutrick?</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">24/7 Support</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">Expert Team</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">Proven Results</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">Custom Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
