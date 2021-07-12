<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function indexNoLocale()
    {
        return $this->redirectToRoute('pages', ['_locale' => 'ru']);
    }
    /**
     * @Route("/{_locale}/", name="pages")
     */
    public function index(): Response
    {
        return $this->render('pages/index.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }
    /**
     * @Route("/{_locale}/about", name="about")
     */
    public function about(): Response
    {
        return $this->render('pages/about.html.twig', [

        ]);
    }
    /**
     * @Route("/{_locale}/login", name="login")
     */
    public function login(): Response
    {
        return $this->render('pages/login.html.twig', [

        ]);
    }
    /**
     * @Route("/{_locale}/credits-banks", name="request")
     */
    public function request(): Response
    {
        return $this->render('pages/credits-banks.html.twig', [

        ]);
    }
    /**
    //     * @Route("/{_locale}/document", name="document")
    //     */
//    public function document(): Response
//    {
//        return $this->render('pages/document.html.twig', [
//
//        ]);
//    }
    /**
     * @Route("/{_locale}/public-offer", name="public-offer")
     */
    public function publicOffer(): Response
    {
        return $this->render('pages/public-offer.html.twig', [

        ]);
    }
    /**
     * @Route("/{_locale}/terms-of-use", name="terms-of-use")
     */
    public function termsOfUse(): Response
    {
        return $this->render('pages/terms-of-use.html.twig', [

        ]);
    }
    /**
     * @Route("/{_locale}/privacy-policy", name="privacy-policy")
     */
    public function privacyPolicy(): Response
    {
        return $this->render('pages/privacy-policy.html.twig', [

        ]);
    }
    /**
     * @Route("/{_locale}/contacts", name="contacts")
     */
    public function contacts(): Response
    {
        return $this->render('pages/contacts.html.twig', [

        ]);
    }
    /**
     * @Route("/{_locale}/credit-form", name="credit-form")
     */
    public function creditForm(): Response
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $this->render('pages/credit-form.html.twig', [
            'ip'=>$ip
        ]);
    }
    /**
     * @Route("/{_locale}/reset-password", name="reset-password")
     */
    public function resetPassword(): Response
    {
        return $this->render('pages/reset-password.html.twig', [

        ]);
    }

}
