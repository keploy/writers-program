<?php
use PHPUnit\Framework\TestCase;

class SendEmailTest extends TestCase
{
    public function testEnvOverridesDefault()
    {
        $_ENV['SITE_OWNERS_EMAIL'] = 'test@example.com';
        putenv('SITE_OWNERS_EMAIL=test@example.com');
        require __DIR__ . '/../inc/sendEmail.php';
        $this->assertSame('test@example.com', $siteOwnersEmail);
    }
}